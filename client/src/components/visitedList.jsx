import React from 'react';

const stateNames = {
  al: 'Alabama',
  ak: 'Alaska',
  az: 'Arizona',
  ar: 'Arkansas',
  ca: 'California',
  co: 'Colorado',
  ct: 'Connecticut',
  de: 'Delaware',
  fl: 'Florida',
  ga: 'Georgia',
  hi: 'Hawaii',
  id: 'Idaho',
  il: 'Illinois',
  in: 'Indiana',
  ia: 'Iowa',
  ks: 'Kansas',
  ky: 'Kentucky',
  la: 'Louisiana',
  me: 'Maine',
  md: 'Maryland',
  ma: 'Massachusetts',
  mi: 'Michigan',
  mn: 'Minnesota',
  ms: 'Mississippi',
  mo: 'Missouri',
  mt: 'Montana',
  ne: 'Nebraska',
  nv: 'Nevada',
  nh: 'New Hampshire',
  nj: 'New Jersey',
  nm: 'New Mexico',
  ny: 'New York',
  nc: 'North Carolina',
  nd: 'North Dakota',
  oh: 'Ohio',
  ok: 'Oklahoma',
  or: 'Oregon',
  pa: 'Pennsylvania',
  ri: 'Rhode Island',
  sc: 'South Carolina',
  sd: 'South Dakota',
  tn: 'Tennessee',
  tx: 'Texas',
  ut: 'Utah',
  vt: 'Vermont',
  va: 'Virginia',
  wa: 'Washington',
  wv: 'West Virginia',
  wi: 'Wisconsin',
  wy: 'Wyoming'
};

const VisitedStatesList = ({ selectedStates,type }) => {
    console.log(type)
  return (
    <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
                <tr>
                    <th>{type} Visited</th>
                </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
                {selectedStates.map((stateId) => (
                <tr key={stateId}>
                    <td>{stateNames[stateId]}</td>
                </tr>
                ))}
            </tbody>
        </table>
     
    </div>
  );
};

export default VisitedStatesList;
