import styles from "./StatsAbout.module.css";

export default function StatsAbout() {
    return (
        <section className={styles.about_section}>
            <div className={styles.sub_about_container}>
                <div className={styles.text_container}>
                    <h1 className={styles.main_title}>About Our Journey</h1>
                    <p className={styles.description}>
                        Discover our inspiring journey at ASBD where we're
                        dedicated to creating smiles through exceptional
                        services. Our team's commitment to excellence and our
                        core values guide us on this exciting path. Discover our
                        inspiring journey at ASBD where we're dedicated to
                        creating smiles through exceptional services. Our team's
                        commitment to excellence and our core values guide us on
                        this exciting path. Discover our inspiring journey at
                        ASBD where we're
                    </p>
                </div>
                <div className={styles.stats_container}>
                    <div className={styles.container_individual}>
                        <h3 className={styles.number_stat}>100</h3>
                        <p className={styles.description_stat}>Proyectos unicos</p>
                    </div>
                    <div>
                        <h3 className={styles.number_stat}>200</h3>
                        <p className={styles.description_stat}>Clientes felices</p>
                    </div>
                    <div>
                        <h3 className={styles.number_stat}>10</h3>
                        <p className={styles.description_stat}>Empleados dedicados</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
