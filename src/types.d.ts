interface Section {
    type: number;
    data: any;
    setData: (arr: Array) => void;
    reorderData: (oldID: number, newID: number, type: number) => void;
}

interface Education {
    data: {
        school: string;
        degree: string;
        sDate: string;
        eDate: string;
        city: string;
        desc: string;
    }
    id: number;
    setData: (arr:Array) => void;
    reorderData: (oldID: number, newID: number, type: number) => void;
}