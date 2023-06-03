export class Step {

    //#region Properties

    /** The id of the step. */
    private _id: string;
    /** The description of the step. */
    private _description: string;
    /** The number of the step. */
    private _number: number;
    /** The duration of the step. */
    private _duration: number;

    /** Return the step's id. */
    public get id(): string {
        return this._id;
    }

    /** Return the step's description. */
    public get description(): string {
        return this._description;
    }

    /** Return the step's number. */
    public get number(): number {
        return this._number;
    }

    /** Return the step's duration. */
    public get duration(): number {
        return this._duration;
    }

    //#endregion

    //#region Methods

    constructor(id: string, description: string, number: number, duration: number) {
        this._id = id;
        this._description = description;
        this._number = number;
        this._duration = duration;
    }

    //#endregion
}