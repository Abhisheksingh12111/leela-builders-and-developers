import React from 'react';
import { X, Trash2, ArrowRight, Building2, MapPin, BedDouble, Calendar } from 'lucide-react';
import { Property } from '../types';

interface ShortlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  shortlistedProperties: Property[];
  onRemoveFromShortlist: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onOpenScheduleVisit: () => void;
}

export const ShortlistDrawer: React.FC<ShortlistDrawerProps> = ({
  isOpen,
  onClose,
  shortlistedProperties,
  onRemoveFromShortlist,
  onSelectProperty,
  onOpenScheduleVisit,
}) => {
  if (!isOpen) return null;

  const totalValueCr = shortlistedProperties.reduce((acc, p) => acc + p.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end">
      <div 
        className="w-full max-w-md bg-[#0c121e] border-l border-[#25344e] h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-[#080c13] border-b border-[#25344e] flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg text-[#f3e9dc] font-medium">
              Shortlisted Residences
            </h3>
            <span className="text-xs text-[#c5a880]">
              {shortlistedProperties.length} {shortlistedProperties.length === 1 ? 'Property' : 'Properties'} Selected
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#0f1420] border border-[#25344e] text-[#cbd5e0] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {shortlistedProperties.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Building2 className="w-10 h-10 text-[#c5a880] mx-auto opacity-40" />
              <p className="font-serif text-lg text-[#f3e9dc]">Your shortlist is currently empty</p>
              <p className="text-xs text-[#a0aec0] max-w-xs mx-auto">
                Click the heart icon on any residence to save it for portfolio comparison or group viewing.
              </p>
            </div>
          ) : (
            shortlistedProperties.map((p) => (
              <div
                key={p.id}
                className="p-3 bg-[#080c13] border border-[#25344e] rounded-xl flex gap-3 group relative hover:border-[#c5a880]/50 transition-colors"
              >
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-20 h-20 rounded-lg object-cover shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectProperty(p);
                  }}
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <div className="text-[10px] text-[#c5a880] flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{p.locality}, {p.city}</span>
                      </div>
                      <button
                        onClick={() => onRemoveFromShortlist(p.id)}
                        className="text-[#718096] hover:text-rose-400 p-1 transition-colors"
                        title="Remove from shortlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h4 
                      className="text-xs font-serif text-[#f3e9dc] font-medium truncate cursor-pointer hover:text-[#c5a880]"
                      onClick={() => {
                        onClose();
                        onSelectProperty(p);
                      }}
                    >
                      {p.title}
                    </h4>
                    <div className="text-xs font-bold text-[#d8be93] font-serif mt-0.5">
                      {p.priceDisplay}
                    </div>
                  </div>

                  <div className="text-[10px] text-[#a0aec0] flex items-center gap-2">
                    <span>{p.bhk}</span>
                    <span>•</span>
                    <span>{p.carpetArea.toLocaleString('en-IN')} sq.ft</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {shortlistedProperties.length > 0 && (
          <div className="p-6 bg-[#080c13] border-t border-[#25344e] space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#a0aec0]">Cumulative Portfolio Value:</span>
              <span className="font-serif text-lg font-bold text-[#f3e9dc]">
                ₹{totalValueCr.toFixed(2)} Cr
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenScheduleVisit();
              }}
              className="w-full py-3 rounded-lg bg-[#c5a880] hover:bg-[#d8be93] text-[#090d14] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/15"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Combined Viewing Dossier</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
