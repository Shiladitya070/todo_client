interface TodoProps {
    id: number;
    Task: string;
    Completed: boolean;
    description?: string;

}

export const Todo = ({ id, Task, Completed, description }: TodoProps) => {

    return (
        <div className="bg-white rounded-lg shadow-md my-2 p-4 w-fit min-w-[350px]">
            <div className="flex items-center">
                <input onChange={() => { console.log("changed", id) }} type="checkbox" defaultChecked={Completed} className="mr-2" />
                <h3 className="text-lg font-medium">{Task}</h3>
            </div>
            {description && <p className="text-gray-500 mt-2">{description}</p>}
        </div>
    );
}