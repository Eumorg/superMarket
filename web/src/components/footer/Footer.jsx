import style from './Footer.module.css';

function Footer() {

  return (
    <div className={style.footer}>
      <footer className={style.footer__inner}>
        <div className={style.text}>
          <h4 className={style.text_footer}>Техника Apple по доступной цене</h4>
        </div>
      </footer>
    </div>
  )
}

export default Footer
