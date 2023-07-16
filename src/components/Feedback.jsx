export const Feedback = () => {
  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback-content">
          <h1>Связаться со мной</h1>

          <form>
            <label id="name_l">Имя</label>
            <input type="text" id="name_i" />

            <label id="email_l">ПОЧТА</label>
            <input type="text" id="email_i" />

            <label id="message_l">СООБЩЕНИЕ</label>
            <textarea id="message_i"></textarea>

            <button className="btn">ОТПРАВИТЬ</button>
          </form>
        </div>
      </div>
    </section>
  );
};
