export interface RaceData {
  candidates: string;
  competitive: boolean;
  description?: string;
}

export interface ZipRecord {
  zip: string;
  locationName: string;
  house: RaceData;
  senate: RaceData;
}

// You can manually add or update zip codes here to use as a template.
export const zipDatabase: Record<string, ZipRecord> = {
  '89109': {
    zip: '89109',
    locationName: 'Las Vegas, NV (NV-01)',
    house: { 
      candidates: 'Dina Titus (D) vs. Mark Robertson (R)', 
      competitive: true, 
      description: 'Highly contested House seat in a critical battleground state.' 
    },
    senate: { 
      candidates: 'Jacky Rosen (D) vs. Sam Brown (R)', 
      competitive: true,
      description: 'One of the closest Senate races in the country.' 
    },
  },
  '18503': {
    zip: '18503',
    locationName: 'Scranton, PA (PA-08)',
    house: { 
      candidates: 'Matt Cartwright (D) vs. Rob Bresnahan (R)', 
      competitive: true 
    },
    senate: { 
      candidates: 'Bob Casey (D) vs. Dave McCormick (R)', 
      competitive: true 
    },
  },
  '90210': {
    zip: '90210',
    locationName: 'Beverly Hills, CA (CA-33)',
    house: { 
      candidates: 'Ted Lieu (D) vs. Republican Challenger', 
      competitive: false 
    },
    senate: { 
      candidates: 'Adam Schiff (D) vs. Steve Garvey (R)', 
      competitive: false 
    },
  },
  '78701': {
    zip: '78701',
    locationName: 'Austin, TX (TX-37)',
    house: { 
      candidates: 'Lloyd Doggett (D) vs. Republican Challenger', 
      competitive: false 
    },
    senate: { 
      candidates: 'Colin Allred (D) vs. Ted Cruz (R)', 
      competitive: true,
      description: 'A highly competitive flip opportunity in the Senate.'
    },
  },
  '53202': {
    zip: '53202',
    locationName: 'Milwaukee, WI (WI-04)',
    house: { 
      candidates: 'Gwen Moore (D) vs. Republican Challenger', 
      competitive: false 
    },
    senate: { 
      candidates: 'Tammy Baldwin (D) vs. Eric Hovde (R)', 
      competitive: true 
    },
  }
};
