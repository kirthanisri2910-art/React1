function Student({ name, age, course }) {
    return (
        <div className="bg-gray-300 border rounded p-4 border-red-700 shadow w-60 text-center">
            <p className="text-gray-600 mb-2">Student</p>
            <h1 className="text-xl font-bold text-blue-500">{name}</h1>
            <h2 className="text-md font-bold text-pink-500">{age}</h2>
            <h3 className="text-sm font-bold text-green-500">{course}</h3>
        </div>
    );
}
export default Student