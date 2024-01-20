interface TodoProps {
    id: number;
    Task: string;
    Completed: boolean;
    description?: string;
    setTodo: any;
}

export const Todo = ({ id, Task, Completed, description, setTodo }: TodoProps) => {
    const changeCompleted = () => {
        console.log("change completed")
        setTodo((prev: any) => {
            return prev.map((todo: any) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        Completed: !todo.Completed
                    }
                }
                return todo;
            })
        })
    }
    return (
        <div className="bg-white rounded-lg shadow-md my-2 p-4 w-fit min-w-[400px]">
            <div className="flex items-center">
                <input onClick={() => changeCompleted} type="checkbox" defaultChecked={Completed} className="mr-2" />
                <h3 className="text-lg font-medium">{Task}</h3>
            </div>
            {description && <p className="text-gray-500 mt-2">{description}</p>}
        </div>
    );
}