import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, AlertTriangle, Info, Bell } from 'lucide-react';
import api from '../utils/api';

export default function NotificationModal() {
  const [notification, setNotification] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchActiveNotification();
  }, []);

  const fetchActiveNotification = async () => {
    try {
      const data = await api.get('/notifications/active');
      if (data.success && data.notification && data.notification.active) {
        const notif = data.notification;
        // Check if already dismissed during this session
        const isDismissed = sessionStorage.getItem(`dismissed_notif_${notif._id}`);
        if (!isDismissed) {
          setNotification(notif);
          setIsOpen(true);
        }
      }
    } catch (err) {
      console.log('No active notification or network error:', err.message);
    }
  };

  const handleClose = () => {
    if (notification) {
      sessionStorage.setItem(`dismissed_notif_${notification._id}`, 'true');
    }
    setIsOpen(false);
  };

  if (!notification) return null;

  // Style variations
  const isFestive = notification.style === 'festive';
  const isAlert = notification.style === 'alert';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full max-w-lg rounded-3xl p-8 relative overflow-hidden shadow-2xl border ${
              isFestive
                ? 'bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-950 border-amber-500/40 text-amber-50 shadow-amber-500/10'
                : isAlert
                ? 'bg-gradient-to-br from-slate-900 via-rose-950/40 to-slate-950 border-rose-500/40 text-rose-50 shadow-rose-500/10'
                : 'bg-slate-900/90 border-cyan-500/40 text-white shadow-cyan-500/10'
            }`}
          >
            {/* Background Decorative Glow */}
            <div
              className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
                isFestive ? 'bg-amber-500/30' : isAlert ? 'bg-rose-500/30' : 'bg-cyan-500/30'
              }`}
            />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition"
              aria-label="Close notification"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Icon & Title */}
            <div className="flex items-center space-x-3 mb-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shadow-lg ${
                  isFestive
                    ? 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 shadow-amber-500/25'
                    : isAlert
                    ? 'bg-gradient-to-tr from-rose-500 to-red-600 text-white shadow-rose-500/25'
                    : 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 shadow-cyan-500/25'
                }`}
              >
                {isFestive ? (
                  <Sparkles className="w-6 h-6 animate-pulse" />
                ) : isAlert ? (
                  <AlertTriangle className="w-6 h-6" />
                ) : (
                  <Bell className="w-6 h-6" />
                )}
              </div>
              <div>
                <span
                  className={`text-[10px] uppercase font-bold tracking-widest ${
                    isFestive ? 'text-amber-400' : isAlert ? 'text-rose-400' : 'text-cyan-400'
                  }`}
                >
                  {isFestive ? 'Special Announcement' : isAlert ? 'Important Notice' : 'Update'}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">{notification.title}</h3>
              </div>
            </div>

            {/* Message Content */}
            <div className="text-sm leading-relaxed text-slate-200 bg-slate-950/50 border border-slate-800/80 rounded-2xl p-5 mb-6">
              {notification.message}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleClose}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition shadow-lg ${
                  isFestive
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 shadow-amber-500/20'
                    : isAlert
                    ? 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 text-white shadow-rose-500/20'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-cyan-500/20'
                }`}
              >
                Got it, thank you
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
