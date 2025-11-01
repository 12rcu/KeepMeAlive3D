export interface StateData {
    id: string
    posX: number
    poxY: number
    connectedTo: string[]
}

export const sampleFsm : StateData[] = [
    {
        id: "1",
        posX: 100,
        poxY: 200,
        connectedTo: ["2","3"]
    },
    {
        id: "2",
        posX: 500,
        poxY: 100,
        connectedTo: ["4"]
    },
    {
        id: "3",
        posX: 200,
        poxY: 600,
        connectedTo: ["2"]
    },
    {
        id: "4",
        posX: 400,
        poxY: 600,
        connectedTo: []
    }
]