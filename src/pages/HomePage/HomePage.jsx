import s from "../HomePage/HomePage.module.css";
const HomePage = () => {
  return (
    <div className={s.homepage}>
      <section className={s.section}>
        <h1>Welcome to Your Contact Book</h1>
        <p>Manage all your contacts efficiently and easily.</p>
      </section>
      <div className={s.background}></div>
    </div>
  );
};

export default HomePage;
