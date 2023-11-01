import styles from "./StatsAbout.module.css";

export default function StatsAbout() {
    return (
        <section className={styles.about_section}>
            <div className={styles.sub_about_container}>
                <div className={styles.text_container}>
                    <h1 className={styles.main_title}>
                        Nuestra Historia en Duckio
                    </h1>
                    <p className={styles.description}>
                        En DuckIO, estamos comprometidos a impulsar la
                        innovación y la tecnología de vanguardia para hacer la
                        vida más fácil y emocionante. Desde nuestros humildes
                        comienzos, hemos estado transformando el mundo digital
                        con soluciones de última generación. En Duckio, creemos
                        que el futuro es ahora y que cada día es una oportunidad
                        para crear un impacto positivo en la vida de las
                        personas.
                    </p>
                </div>
                <div className={styles.stats_container}>
                    <div className={styles.container_individual}>
                        <h3 className={styles.number_stat}>500</h3>
                        <p className={styles.description_stat}>
                            Proyectos innovadores
                        </p>
                    </div>
                    <div>
                        <h3 className={styles.number_stat}>1000</h3>
                        <p className={styles.description_stat}>
                            Clientes satisfechos
                        </p>
                    </div>
                    <div>
                        <h3 className={styles.number_stat}>50</h3>
                        <p className={styles.description_stat}>
                            Expertos en tecnología
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
