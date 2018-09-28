export class Formation  {

    constructor(public fromYear: number, 
                public toYear: number,
                public school: string,
                public diplom: string,
                public fieldStudies: string,
                public description: string,
                public activity?: string) {}
}