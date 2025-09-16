export default function projects() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="space-y-4">
        <li className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Blog App</h2>
          <p className="text-gray-600">
            A blog built with Go Fiber and React, featuring authentication and CRUD posts.
          </p>
        </li>
        <li className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Book Management System</h2>
          <p className="text-gray-600">
            PHP & MySQL app with SweetAlert2 integration for smooth UI feedback.
          </p>
        </li>
      </ul>
    </div>
  );
}
