import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, MapPin, AlertCircle, CheckCircle2, ArrowRight, XCircle, Building2, User } from 'lucide-react';
import { zipDatabase, ZipRecord } from '../data/zipDatabase';

type SearchResult = 
  | { status: 'found'; data: ZipRecord }
  | { status: 'not-found' }
  | { status: 'invalid' }
  | null;

export default function ZipCheck() {
  const [zipCode, setZipCode] = useState('');
  const [searchResult, setSearchResult] = useState<SearchResult>(null);

  const checkZipStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length !== 5 || !/^\d+$/.test(zipCode)) {
      setSearchResult({ status: 'invalid' });
      return;
    }
    
    const data = zipDatabase[zipCode];
    if (data) {
      setSearchResult({ status: 'found', data });
    } else {
      setSearchResult({ status: 'not-found' });
    }
  };

  const renderRaceCard = (title: string, icon: React.ReactNode, race: ZipRecord['house']) => (
    <div className={`p-4 mt-4 rounded-xl border ${race.competitive ? 'bg-emerald-50/50 border-emerald-100' : 'bg-slate-50 border-slate-200'}`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg ${race.competitive ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-600'}`}>
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 leading-tight">{title}</h4>
          <span className={`text-xs font-bold uppercase tracking-wider ${race.competitive ? 'text-emerald-600' : 'text-slate-500'}`}>
            {race.competitive ? 'Highly Competitive' : 'Safe Seat'}
          </span>
        </div>
      </div>
      <p className="text-slate-700 font-medium ml-12">
        {race.candidates}
      </p>
      {race.description && (
        <p className="text-slate-500 text-sm ml-12 mt-1">
          {race.description}
        </p>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-3xl mx-auto px-4 py-12 md:py-20"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Check Your Voting Power
        </h1>
        <p className="text-lg text-slate-600 font-medium">
          Enter your current ZIP code to see local candidates and identify if your vote is in a highly competitive race.
        </p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 mb-8">
        <form onSubmit={checkZipStatus} className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MapPin className="text-slate-400 w-5 h-5" />
            </div>
            <input
              type="text"
              pattern="\d*"
              maxLength={5}
              placeholder="e.g. 89109"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 font-mono"
            />
          </div>
          <button
            type="submit"
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center transition-colors"
          >
            <Search className="w-5 h-5 mr-2" />
            Check Local Power
          </button>
        </form>
        
        <p className="text-sm text-slate-500 font-medium text-center bg-slate-50 py-2 rounded-lg border border-slate-100">
          <strong>Template Samples:</strong> Try <button onClick={() => setZipCode('89109')} className="text-blue-600 hover:underline">89109</button> (NV), <button onClick={() => setZipCode('18503')} className="text-blue-600 hover:underline">18503</button> (PA), <button onClick={() => setZipCode('90210')} className="text-blue-600 hover:underline">90210</button> (CA), <button onClick={() => setZipCode('78701')} className="text-blue-600 hover:underline">78701</button> (TX), or <button onClick={() => setZipCode('53202')} className="text-blue-600 hover:underline">53202</button> (WI).
        </p>

        <AnimatePresence mode="wait">
          {searchResult?.status === 'found' && (
            <motion.div
              key="found"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 overflow-hidden"
            >
              {(() => {
                const isOverallCompetitive = searchResult.data.house.competitive || searchResult.data.senate.competitive;
                return (
                  <div className={`p-6 border rounded-2xl ${isOverallCompetitive ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
                    <div className="flex flex-col md:flex-row gap-6 items-start mb-6 border-b border-black/5 pb-6">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${isOverallCompetitive ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                        {isOverallCompetitive ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-1 ${isOverallCompetitive ? 'text-emerald-900' : 'text-red-900'}`}>
                          {isOverallCompetitive ? 'High Impact District' : 'Low Impact District'}
                        </h3>
                        <p className={`font-medium ${isOverallCompetitive ? 'text-emerald-800/80' : 'text-red-800/80'}`}>
                          {searchResult.data.locationName}
                        </p>
                        <p className={`mt-3 font-medium text-sm leading-relaxed ${isOverallCompetitive ? 'text-emerald-900/70' : 'text-red-900/70'}`}>
                          {isOverallCompetitive 
                            ? "This area features at least one highly competitive race! A single progressive vote here holds massive weight for upcoming crucial midterm races." 
                            : "Based on our data, local districts lean heavily towards one party. An extra progressive vote here yields minimal systematic impact on the balance of power."}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-800 px-1 uppercase tracking-wider text-sm flex items-center">
                        Upcoming Races
                      </h4>
                      {renderRaceCard("U.S. House", <User className="w-5 h-5" />, searchResult.data.house)}
                      {renderRaceCard("U.S. Senate", <Building2 className="w-5 h-5" />, searchResult.data.senate)}
                    </div>

                    {!isOverallCompetitive && (
                      <div className="mt-8">
                        <Link
                          to="/pledge"
                          className="inline-flex flex-wrap items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold shadow-md transition-all hover:shadow-red-600/30"
                        >
                          Consider a Strategic Move <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          )}

          {searchResult?.status === 'not-found' && (
            <motion.div
              key="not-found"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 overflow-hidden"
            >
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-600">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">District Not Found</h3>
                  <p className="text-slate-700 mb-6 font-medium">
                    We don't currently have competitive race data for this ZIP code in our template system. It may be outside our highly targeted swing districts.
                  </p>
                  <Link
                    to="/pledge"
                    className="inline-flex flex-wrap items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-md transition-all shadow-blue-500/30 hover:scale-105"
                  >
                    View Relocation Pledge <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {searchResult?.status === 'invalid' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 font-medium mt-4 ml-4"
            >
              Please enter a valid 5-digit ZIP code.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
