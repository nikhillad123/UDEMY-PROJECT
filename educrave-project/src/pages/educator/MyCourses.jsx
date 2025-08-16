import { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import Loading from '../../components/student/Loading';
import axios from 'axios'
import { toast } from 'react-toastify'

const MyCourses = () => {
  const { currency, backendUrl, isEducator, getToken } = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  const fetchEducatorCourses = async () => {
    // setCourses(allCourses)
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + '/api/educator/courses', { headers: { Authorization: `Bearer ${token}` } });

      data.success && setCourses(data.courses)
    } catch (error) {
      toast.error(error.message);

    }
  }

  useEffect(() => {
    if (isEducator) {
      fetchEducatorCourses();
    }
  }, [isEducator]);

  return courses ? (
    <div className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">My Courses</h2>

        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="table-fixed w-full overflow-hidden">
            {/* Column widths */}
            <colgroup>
              <col className="w-[50%]" />   {/* All Courses */}
              <col className="w-[16.66%]" /> {/* Earnings */}
              <col className="w-[16.66%]" /> {/* Students */}
              <col className="w-[16.66%]" /> {/* Published On */}
            </colgroup>

            {/* Table Header */}
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">All Courses</th>
                <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                <th className="px-4 py-3 font-semibold truncate">Students</th>
                <th className="px-4 py-3 font-semibold truncate">Published On</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-sm text-gray-500">
              {courses.map((course) => (
                <tr
                  key={course._id}
                  className="border-b border-gray-500/20 hover:bg-gray-50 transition"
                >
                  {/* Course Info */}
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <img
                      src={course.courseThumbnail}
                      alt="Course Thumbnail"
                      className="w-16 h-10 object-cover rounded flex-shrink-0"
                    />
                    <span className="truncate hidden md:block font-medium text-gray-800">
                      {course.courseTitle}
                    </span>
                  </td>

                  {/* Earnings */}
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {currency}
                    {Math.floor(
                      course.enrolledStudents.length *
                      (course.coursePrice - (course.discount * course.coursePrice) / 100)
                    )}
                  </td>

                  {/* Students */}
                  <td className="px-4 py-3">{course.enrolledStudents.length}</td>

                  {/* Published On */}
                  <td className="px-4 py-3">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;
