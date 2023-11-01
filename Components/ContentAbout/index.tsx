import styles from "./ContentAbout.module.css";

export default function ContentAbout() {
    return (
        <>
            <h1 className={styles.title_main}>Sobre Nosotros</h1>
            <div className={styles.individual_container}>
                <h1 className={styles.title_section}>Nuestra Historia</h1>
                <p className={styles.paragraph}>
                    En DuckIO, nuestra historia es un viaje de pasión y determinación. Fundada hace más de dos décadas por un grupo visionario de amantes de la tecnología, hemos recorrido un camino extraordinario. Desde nuestros humildes comienzos en un pequeño garaje, hemos evolucionado constantemente y nos hemos convertido en un referente en el mundo digital. Durante todos estos años, nuestra dedicación implacable a la innovación y la excelencia nos ha llevado a lugares inimaginables. Hemos superado desafíos, abrazado nuevas tecnologías y hemos sido parte de momentos transformadores en la industria. Hoy, miramos hacia el futuro con entusiasmo y gratitud por todo lo que hemos logrado.
                </p>
            </div>

            <div className={styles.individual_container}>
                <h1 className={styles.title_section}>Nuestra Misión</h1>
                <p className={styles.paragraph}>
                    La misión de DuckIO es simple pero poderosa: transformar el mundo a través de la tecnología. Creemos profundamente en el potencial de la innovación tecnológica para mejorar la vida de las personas y las empresas. Nuestro compromiso es proporcionar soluciones tecnológicas de vanguardia que sean confiables, seguras y efectivas. Buscamos impulsar la transformación digital y brindar a nuestros clientes las herramientas necesarias para tener éxito en un mundo cada vez más conectado. En cada proyecto que emprendemos, en cada línea de código que escribimos, estamos impulsados por esta misión, y es lo que nos impulsa a alcanzar nuevos horizontes en la industria tecnológica.
                </p>
            </div>

            <div className={styles.individual_container}>
                <h1 className={styles.title_section}>Nuestro Equipo</h1>
                <p className={styles.paragraph}>
                    En DuckIO, nuestro equipo es la esencia de nuestra empresa. Contamos con una red de profesionales apasionados por la tecnología, desde ingenieros y desarrolladores hasta expertos en análisis de datos y creativos visionarios. Cada miembro de nuestro equipo comparte un compromiso común con la innovación y la excelencia. Trabajamos de la mano, compartiendo conocimientos y habilidades para superar los desafíos tecnológicos más complejos. Nuestra cultura de colaboración y aprendizaje continuo es lo que nos impulsa hacia adelante. Somos un equipo unido que se esfuerza por impulsar la industria hacia adelante, y lo hacemos juntos.
                </p>
            </div>

            <div className={styles.individual_container}>
                <h1 className={styles.title_section}>Nuestros Valores</h1>
                <p className={styles.paragraph}>
                    Los valores de DuckIO son la brújula que guía nuestro camino. La integridad, la innovación, la colaboración y el compromiso con la calidad son fundamentales para nuestra empresa. Valoramos la integridad, actuando con ética en cada paso. La innovación es el motor de nuestra creatividad, siempre buscamos formas nuevas y emocionantes de abordar los desafíos tecnológicos. La colaboración es nuestra fuerza motriz; creemos en el poder de trabajar juntos para alcanzar resultados excepcionales. Nuestro compromiso con la calidad se refleja en cada proyecto que emprendemos; nos esforzamos por superar las expectativas y mantener los más altos estándares de excelencia. Estos valores son la base de todo lo que hacemos y nos mantienen enfocados en nuestra misión de transformar el mundo a través de la tecnología.
                </p>
            </div>
        </>
    );
}
