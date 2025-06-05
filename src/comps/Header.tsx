import styles from './Header.module.css';

export function Header() {
return (
    <div className={styles.MyHeader}>
        <h1>Spencer Banasik</h1>
        <h2>Recent Graduate</h2>
        <address>Spring, TX&nbsp;|&nbsp;
            <a href="tel:+18325153620">832-515-3620</a>&nbsp;|&nbsp;
            <a href="mailto:smbanasik@gmail.com">smbansaik@gmail.com </a>&nbsp;|&nbsp;
            <a rel="external" href="https://www.linkedin.com/in/spencer-banasik-290682211/">LinkedIn</a>&nbsp;|&nbsp;
            <a rel="external" href="https://github.com/smbanasik">GitHub</a>
        </address>
    </div>
)
}