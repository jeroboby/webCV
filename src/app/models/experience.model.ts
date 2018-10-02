export class Experience  {

    constructor(public jobTitle: string,
                public company: string,
                public place: string,
                public fromMonth: string,
                public fromYear: number,
                public toMonth: string,
                public toYear: number,
                public description: string,
                public today?: boolean) {}
}