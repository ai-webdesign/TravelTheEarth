import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, ArrowRight, Sparkles, Percent } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenQuoteModal: (packageName?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(10000);
  const [avgBookingValue, setAvgBookingValue] = useState<number>(450);
  const [selectedTier, setSelectedTier] = useState<'accelerator' | 'authority' | 'dominator'>('authority');

  // Multiplier logic
  const tierConfig = {
    accelerator: {
      name: 'Destination Launch Tier',
      trafficMultiplier: 2.2, // +120%
      conversionRate: 0.018, // 1.8%
      otaCommissionSaved: 0.20 // 20% typical OTA fee
    },
    authority: {
      name: 'Authority Growth Engine',
      trafficMultiplier: 3.4, // +240%
      conversionRate: 0.024, // 2.4%
      otaCommissionSaved: 0.20
    },
    dominator: {
      name: 'Market Dominator & AI Tech',
      trafficMultiplier: 4.8, // +380%
      conversionRate: 0.032, // 3.2%
      otaCommissionSaved: 0.20
    }
  };

  const config = tierConfig[selectedTier];
  const projectedTraffic = Math.round(monthlyTraffic * config.trafficMultiplier);
  const additionalMonthlyVisitors = projectedTraffic - monthlyTraffic;
  const projectedMonthlyBookings = Math.round(projectedTraffic * config.conversionRate);
  const estimatedGrossRevenue = Math.round(projectedMonthlyBookings * avgBookingValue);
  const estimatedCommissionSavedYearly = Math.round((estimatedGrossRevenue * config.otaCommissionSaved) * 12);
  const projectedYearlyRevenueLift = Math.round(estimatedGrossRevenue * 12);

  return (
    <section id="roi-calculator" className="py-24 bg-slate-950 relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-800/80 text-xs font-semibold text-amber-300 mb-4">
            <Calculator className="w-3.5 h-3.5 text-amber-300" />
            <span>Interactive Travel Growth Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-5">
            Calculate Your <span className="text-amber-300">Organic Growth & Booking</span> Uplift
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Estimate how high-DA travel guest posts, Google Maps local pack dominance, and frictionless web design translate into qualified direct guests and saved OTA commissions.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 max-w-5xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Traffic slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="traffic-range" className="text-xs sm:text-sm font-bold text-slate-200">
                    Current Monthly Organic Visitors
                  </label>
                  <span className="text-base font-extrabold text-sky-400 font-mono">
                    {monthlyTraffic.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  id="traffic-range"
                  type="range"
                  min={1000}
                  max={100000}
                  step={1000}
                  value={monthlyTraffic}
                  onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1,000</span>
                  <span>50,000</span>
                  <span>100,000+</span>
                </div>
              </div>

              {/* Avg booking value slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="booking-range" className="text-xs sm:text-sm font-bold text-slate-200">
                    Average Booking / Tour / Room Ticket Value
                  </label>
                  <span className="text-base font-extrabold text-emerald-400 font-mono">
                    ${avgBookingValue.toLocaleString()}
                  </span>
                </div>
                <input
                  id="booking-range"
                  type="range"
                  min={50}
                  max={5000}
                  step={50}
                  value={avgBookingValue}
                  onChange={(e) => setAvgBookingValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>$50 (Day Tour)</span>
                  <span>$1,500 (Hotel Stay)</span>
                  <span>$5,000+ (Luxury Safari)</span>
                </div>
              </div>

              {/* Package Tier Picker */}
              <div>
                <label className="text-xs sm:text-sm font-bold text-slate-200 block mb-2">
                  Target Travel Campaign Scale
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['accelerator', 'authority', 'dominator'] as const).map((tierKey) => {
                    const isCurrent = selectedTier === tierKey;
                    const tierName =
                      tierKey === 'accelerator' ? 'Starter' : tierKey === 'authority' ? 'Authority' : 'Dominator';
                    return (
                      <button
                        key={tierKey}
                        onClick={() => setSelectedTier(tierKey)}
                        className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-900/30'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        {tierName}
                      </button>
                    );
                  })}
                </div>
                <span className="text-[11px] text-slate-400 block mt-2">
                  Active Package: <strong className="text-white">{config.name}</strong>
                </span>
              </div>

            </div>

            {/* Projected Outputs Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 rounded-2xl border border-sky-500/30 shadow-2xl relative overflow-hidden">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1">
                Projected 6-12 Month Growth Output
              </span>
              <h4 className="text-xl font-bold text-white mb-6 font-['Outfit']">
                Direct Organic Revenue Potential
              </h4>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Projected Traffic</span>
                  <span className="text-2xl font-extrabold text-sky-400 font-mono">
                    {projectedTraffic.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-emerald-400 block mt-0.5">
                    +{additionalMonthlyVisitors.toLocaleString()} new visitors/mo
                  </span>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Monthly Direct Bookings</span>
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                    ~{projectedMonthlyBookings}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    at { (config.conversionRate * 100).toFixed(1) }% conv. rate
                  </span>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/30 mb-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-300 font-medium">OTA Commissions Saved (Yearly)</span>
                  <span className="text-xs font-bold text-amber-300">20% Saved</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-amber-300 font-mono">
                  ${estimatedCommissionSavedYearly.toLocaleString()}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Keep direct booking revenue in your business rather than paying 18-25% to third-party OTA giants.
                </p>
              </div>

              <button
                onClick={() => onOpenQuoteModal(`ROI Projected Tier: ${config.name} ($${avgBookingValue} ticket)`)}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-sky-900/30"
              >
                <span>Claim This Growth Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
