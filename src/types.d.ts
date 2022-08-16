
interface Section {
  id: number;
  type: number;
  data: any;
  setData: (arr: Array) => void;
  reorderData: (oldID: number, newID: number, type: number) => void;
  reorderSections: (oldID: number, newID: number) => void;
}

interface Personal{
  data: {
    fName: string;
    lName: string;
    email: string;
    phone: number;
    country: string;
    city: string;
  };
  setData: (arr: Array) => void;
}

interface ProfHistory{
  desc: string;
  setData: (arr: Array) => void;
}

interface Education {
  data: {
    school: string;
    degree: string;
    sDate: string;
    eDate: string;
    city: string;
    desc: string;
    toggle: boolean;
  };
  id: number;
  setData: (arr: Array) => void;
  reorderData: (oldID: number, newID: number, type: number) => void;
}

interface Work {
  data: {
    title: string;
    company: string;
    sDate: string;
    eDate: string;
    city: string;
    desc: string;
    toggle: true;
  };
  id: number;
  setData: (arr: Array) => void;
  reorderData: (oldID: number, newID: number, type: number) => void;
}

