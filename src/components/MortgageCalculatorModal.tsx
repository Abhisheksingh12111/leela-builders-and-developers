import React, { useState, useEffect } from 'react';
import { X, Calculator, IndianRupee, Percent, Calendar, ShieldCheck, Check } from 'lucide-react';

interface MortgageCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPriceInCr?: number;
}

export const MortgageCalculatorModal: React.FC<MortgageCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialPriceInCr = 12.5,
}) => {
  const [propertyPriceCr, setPropertyPriceCr] = useState<number>(initialPriceInCr);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [selectedState, setSelectedState] = useState<'Maharashtra' | 'Karnataka' | 'Haryana'>('Maharashtra');

  useEffect(() => {
    if (initialPriceInCr) {
      setPropertyPriceCr(initialPriceInCr);
    }
  }, [initialPriceInCr]);

  if (!isOpen) return null;

  // Calculations
  const totalPriceInRupees = propertyPriceCr * 10000000;
  const downPaymentRupees = totalPriceInRupees * (downPaymentPercent / 100);
  const loanPrincipalRupees = totalPriceInRupees - downPaymentRupees;

  // EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emiRupees = Math.round(
    (loanPrincipalRupees * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalAmountPayable = emiRupees * totalMonths;
  const totalInterestRupees = totalAmountPayable - loanPrincipalRupees;

  // Stamp Duty rates
  const stampDutyRates = {
    Maharashtra: { duty: 6, cess: 1, registration: 30000, desc: '6% Stamp Duty + 1% Metro Cess' },
    Karnataka: { duty: 5.6, cess: 0, registration: 30000, desc: '5.6% Composite Stamp Duty' },
    Haryana: { duty: 7, cess: 0, registration: 50000, desc: '7% Gurgaon Prime Stamp Duty' },
  };

  const currentDuty = stampDutyRates[selectedState];
  const stampDutyAmount = (totalPriceInRupees * (currentDuty.duty + currentDuty.cess)) / 100;

  const formatLakhsCr = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(amount / 100000).toFixed(2)} Lakhs`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl bg-[#0c121e] border border-[#25344e] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080c13] border-b border-[#25344e]/70">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#c5a880]/15 border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#f3e9dc] font-medium">
                Indian Luxury Home Loan & Stamp Duty Estimator
              </h3>
              <p className="text-[10px] text-[#a0aec0]">
                Pre-approved rates with HDFC Wealth, ICICI Bank & SBI Private Banking
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#0f1420] border border-[#25344e] text-[#a0aec0] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Controls */}
            <div className="space-y-4">
              {/* Property Value in Cr */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-[#a0aec0]">Property Value</span>
                  <span className="font-bold text-[#f3e9dc] font-serif">₹{propertyPriceCr.toFixed(2)} Cr</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="35"
                  step="0.25"
                  value={propertyPriceCr}
                  onChange={(e) => setPropertyPriceCr(parseFloat(e.target.value))}
                  className="w-full accent-[#c5a880] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#718096]">
                  <span>₹2.0 Cr</span>
                  <span>₹15.0 Cr</span>
                  <span>₹35.0 Cr</span>
                </div>
              </div>

              {/* Down Payment % */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-[#a0aec0]">Down Payment ({downPaymentPercent}%)</span>
                  <span className="font-medium text-[#c5a880]">{formatLakhsCr(downPaymentRupees)}</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="50"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
                  className="w-full accent-[#c5a880] cursor-pointer"
                />
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-[#a0aec0]">Annual Interest Rate</span>
                  <span className="font-bold text-[#f3e9dc]">{interestRate}% p.a.</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[8.35, 8.5, 8.75].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setInterestRate(rate)}
                      className={`py-1.5 text-xs rounded border transition-all ${
                        interestRate === rate
                          ? 'bg-[#c5a880] text-[#090d14] font-bold border-[#c5a880]'
                          : 'bg-[#080c13] text-[#cbd5e0] border-[#25344e]'
                      }`}
                    >
                      {rate}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-[#a0aec0]">Loan Tenure</span>
                  <span className="font-bold text-[#f3e9dc]">{tenureYears} Years</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[10, 15, 20, 25].map((years) => (
                    <button
                      key={years}
                      onClick={() => setTenureYears(years)}
                      className={`py-1.5 text-xs rounded border transition-all ${
                        tenureYears === years
                          ? 'bg-[#c5a880] text-[#090d14] font-bold border-[#c5a880]'
                          : 'bg-[#080c13] text-[#cbd5e0] border-[#25344e]'
                      }`}
                    >
                      {years} Yrs
                    </button>
                  ))}
                </div>
              </div>

              {/* State for Stamp Duty */}
              <div>
                <label className="block text-xs text-[#a0aec0] mb-1.5">
                  Stamp Duty State Regulations
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Maharashtra', 'Karnataka', 'Haryana'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => setSelectedState(st)}
                      className={`py-1.5 px-2 text-[11px] rounded border transition-all truncate ${
                        selectedState === st
                          ? 'bg-[#172030] text-[#c5a880] border-[#c5a880] font-semibold'
                          : 'bg-[#080c13] text-[#a0aec0] border-[#25344e]'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="p-5 rounded-xl bg-[#080c13] border border-[#25344e] flex flex-col justify-between space-y-4">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold mb-1">
                  Estimated Monthly Outflow
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#f3e9dc]">
                  {formatLakhsCr(emiRupees)}
                  <span className="text-xs font-sans font-normal text-[#a0aec0] ml-1">/ month</span>
                </div>
                <div className="text-[11px] text-[#718096] mt-1">
                  Principal: {formatLakhsCr(loanPrincipalRupees)}
                </div>
              </div>

              {/* Breakdown Table */}
              <div className="space-y-2.5 text-xs pt-4 border-t border-[#25344e]/60">
                <div className="flex justify-between py-1 border-b border-[#25344e]/30">
                  <span className="text-[#a0aec0]">Total Interest Outflow</span>
                  <span className="font-medium text-[#f3e9dc]">{formatLakhsCr(totalInterestRupees)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#25344e]/30">
                  <span className="text-[#a0aec0]">Total Principal + Interest</span>
                  <span className="font-medium text-[#f3e9dc]">{formatLakhsCr(totalAmountPayable)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#25344e]/30">
                  <span className="text-[#a0aec0]">
                    {selectedState} Stamp Duty ({currentDuty.duty + currentDuty.cess}%)
                  </span>
                  <span className="font-medium text-[#d8be93]">{formatLakhsCr(stampDutyAmount)}</span>
                </div>
                <div className="flex justify-between py-1 text-emerald-400">
                  <span>Advisory & Processing Fee</span>
                  <span className="font-semibold">₹0 (Zero Brokerage)</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#0f1420] border border-[#25344e] text-[11px] text-[#a0aec0] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>Private Wealth desks provide custom structured bullet repayment for NRIs.</span>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded bg-[#c5a880] text-[#090d14] font-semibold text-xs uppercase tracking-wider hover:bg-[#d8be93] transition-all"
            >
              Close Estimator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
