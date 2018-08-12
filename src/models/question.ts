export class Question {
    // attr
    category: string="";
    qNo: number=0;
    score: number=0;

    // constructor
    constructor(category: string, qNo: number, score: number) {
        this.category = category;
        this.qNo = qNo;
        this.score = score;
    }

    // setter
    public setCategory(category: string) : void { this.category = category; }
    public setQNo(qNo: number) : void { this.qNo = qNo; }
    public setScore(score: number) : void { this.score = score; }

    // getter
    public getCategory() : string { return this.category; }
    public getQNo() : number { return this.qNo; }
    public getScore() : number { return this.score; }

}
