import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'info' | 'success';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'info', onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 max-w-md bg-neutral-900 text-white p-4 rounded-2xl shadow-xl border border-neutral-800 flex items-center gap-3"
          role="status"
          aria-live="polite"
        >
          <div className="shrink-0 w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300">
            {type === 'success' ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Info className="w-4 h-4 text-amber-400" />
            )}
          </div>
          <p className="text-sm text-neutral-200 leading-[1.5] flex-1 font-normal">
            {message}
          </p>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white rounded-xl hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
