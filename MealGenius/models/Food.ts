export class Food {

    //#region Properties

    /** The id of the food. */
    private _id: string;
    /** The name of the food. */
    private _name: string;

    //#endregion

    //#region Methods

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }

    /** Return the food's id. */
    public get id(): string {
        return this._id;
    }

    /** Return the food's name. */
    public get name(): string {
        return this._name;
    }

    //#endregion
}