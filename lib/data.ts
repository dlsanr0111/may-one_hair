export type Branch = {
  slug: string;
  name: string;
  address: string;
  naverUrl: string;
};

export type ServiceCategory = {
  title: string;
  items: string[];
};

export type Program = {
  title: string;
  audience: '원장님' | '디자이너';
  url: string;
};

export const BRANCHES: Branch[] = [
  {
    slug: 'unjeong',
    name: '운정점',
    address: '경기 파주시 경의로 1218 515호 메이원헤어',
    naverUrl: 'https://naver.me/FAPOvXm8',
  },
  {
    slug: 'yadang',
    name: '야당점',
    address: '경기 파주시 경의로 1092 유은타워3차 2~3층 메이원헤어',
    naverUrl: 'https://naver.me/xX7u89sJ',
  },
  {
    slug: 'seongsu',
    name: '성수점',
    address: '서울 성동구 상원1길 7 3층 메이원헤어',
    naverUrl: 'https://naver.me/F5Dlp8Bz',
  },
  {
    slug: 'migeum',
    name: '미금점',
    address: '경기 성남시 분당구 돌마로 52 MD프라자 2층',
    naverUrl: 'https://naver.me/xY4sijU7',
  },
  {
    slug: 'samsong',
    name: '삼송점',
    address: '경기 고양시 덕양구 삼송동 289',
    naverUrl: 'https://naver.me/GMmg2QHd',
  },
  {
    slug: 'westerndom',
    name: '웨스턴돔점',
    address: '경기 고양시 일산동구 정발산로 27 306·307호',
    naverUrl: 'https://naver.me/FeX2Up4R',
  },
  {
    slug: 'cheonan',
    name: '천안점',
    address: '충남 아산시 탕정면로 22번길 15-11 1층',
    naverUrl: 'https://naver.me/xeAeJ0r1',
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: '커트',
    items: ['커트', '주니어 커트', '앞머리 커트', '남자 스타일링'],
  },
  {
    title: '펌',
    items: [
      '일반펌',
      '매직셋팅',
      '매직/볼륨매직',
      '뿌리매직',
      '뿌리볼륨펌',
      '앞머리펌',
      '맨즈펌',
      '다운펌',
    ],
  },
  {
    title: '컬러',
    items: ['퍼스널 컬러', '탈색', '하이라이트'],
  },
  {
    title: '케어',
    items: ['스페셜케어', '프리미엄케어', '두피케어'],
  },
  {
    title: '스타일링',
    items: ['샴푸', '드라이'],
  },
];

export const PROGRAMS: Program[] = [
  {
    title: '경영컨설팅 신청하기',
    audience: '원장님',
    url: 'https://form.naver.com/response/3rIeWTU9b5IWiLCM4tDUNQ',
  },
  {
    title: '위기 극복 원장님들 프로젝트',
    audience: '원장님',
    url: 'https://form.naver.com/response/jgM0-ispuOswNcAab5U_XA',
  },
  {
    title: '디자이너 지원하기',
    audience: '디자이너',
    url: 'https://form.naver.com/response/hfGym5XJHWljk13CaP66Lw',
  },
  {
    title: '인턴 지원하기',
    audience: '디자이너',
    url: 'https://form.naver.com/response/53Tifq95CoHmt4YJ_dSmqQ',
  },
];

export const BRAND = {
  name: 'MAY ONE',
  nameKr: '메이원헤어',
  taglineKr: '매일을 가장 나답게, 메이원',
  taglineEn: 'Every day, your most authentic self.',
  instagramUrl: 'https://www.instagram.com/mayonehair_official',
  instagramHandle: '@mayonehair_official',
} as const;
