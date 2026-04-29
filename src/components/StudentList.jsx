import StudentCard from "./StudentCard";

const students = [
  {
    id: 1,
    name: "Vyshnavi",
    age: 19,
    email: "vyshnavi@gmail.com",
    city: "Kuppam",
  },
  {
    id: 2,
    name: "Seema",
    age: 22,
    email: "seema@gmail.com",
    city: "anathapur",
  },
  {
    id: 3,
    name: "Hema",
    age: 21,
    email: "hemu@gmail.com",
    city: "Bangalore",
  },
  {
    id: 4,
    name: "Devi",
    age: 21,
    email: "devi@gmail.com",
    city: "Hyderabad",
  },
];

export default function StudentList() {
  return (
    <section className="sma-section">
      <div className="sma-section-header">
        <h2 className="sma-section-title">All Students</h2>
        <span className="sma-student-count">{students.length} students</span>
      </div>
      <div className="sma-student-grid">
        {students.map((s) => (
          <StudentCard
            key={s.id}
            name={s.name}
            age={s.age}
            email={s.email}
            city={s.city}
          />
        ))}
      </div>
    </section>
  );
}
