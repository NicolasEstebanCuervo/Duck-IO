import styles from "./ContentIndex.module.css";

export default function ContentIndex() {
    return (
        <>
            <h1 className={styles.title_main}>Bienvenidos a Duck IO</h1>
            <div className={styles.individual_container}>
                <h1 className={styles.title_section}>
                    Inteligencia Artificial
                </h1>
                <p className={styles.paragraph}>
                    La inteligencia artificial (IA) es una revolucionaria rama
                    de la informática que se centra en desarrollar sistemas
                    capaces de realizar tareas que, hasta hace poco, solo podían
                    ser ejecutadas por seres humanos. En DuckIO, nuestra pasión
                    por la IA se refleja en nuestro compromiso de crear sistemas
                    de aprendizaje automático y algoritmos de procesamiento de
                    lenguaje natural de vanguardia. Nuestros expertos trabajan
                    incansablemente en la creación de asistentes virtuales
                    inteligentes, sistemas de recomendación personalizados y
                    soluciones de análisis de datos que transforman la forma en
                    que las empresas toman decisiones estratégicas. La IA está
                    en el corazón de nuestro enfoque tecnológico y sigue siendo
                    un campo en constante evolución que impulsa la innovación en
                    todos los aspectos de la sociedad.
                </p>
            </div>

            <div className={styles.individual_container}>
                <h1 className={styles.title_section}>Ciberseguridad</h1>
                <p className={styles.paragraph}>
                    En un mundo digital donde la información es un activo
                    crítico, la ciberseguridad se ha convertido en una
                    preocupación primordial. En DuckIO, nos dedicamos a
                    salvaguardar los activos digitales de nuestros clientes a
                    través de soluciones de ciberseguridad sólidas. Nuestros
                    especialistas en ciberseguridad trabajan incansablemente
                    para identificar amenazas, desarrollar protocolos de
                    seguridad avanzados y garantizar la protección de datos
                    sensibles. Desde la detección de intrusiones hasta la
                    educación en seguridad cibernética, nuestra misión es
                    asegurarnos de que nuestros clientes estén un paso por
                    delante de las amenazas cibernéticas en constante evolución.
                    La ciberseguridad es esencial para mantener la confianza y
                    la privacidad en el mundo digital.
                </p>
            </div>

            <div className={styles.individual_container}>
                <h1 className={styles.title_section}>
                    Internet de las Cosas (IoT)
                </h1>
                <p className={styles.paragraph}>
                    El Internet de las Cosas (IoT) es una tendencia tecnológica
                    que promete cambiar la forma en que interactuamos con el
                    mundo que nos rodea. En DuckIO, nos apasiona la IoT y
                    desarrollamos soluciones que permiten la conectividad de
                    objetos cotidianos a la red. Esto significa desde
                    termostatos inteligentes que ajustan automáticamente la
                    temperatura de su hogar hasta sensores de salud que
                    monitorean signos vitales en tiempo real. Estas innovaciones
                    no solo hacen que nuestras vidas sean más cómodas, sino que
                    también tienen un impacto significativo en la eficiencia y
                    la toma de decisiones. La IoT está en constante crecimiento
                    y evolución, y estamos comprometidos en estar a la
                    vanguardia de este emocionante campo que cambia el mundo.
                </p>
            </div>

            <div className={styles.individual_container}>
                <h1 className={styles.title_section}>Tecnología Sostenible</h1>
                <p className={styles.paragraph}>
                    La sostenibilidad es uno de los mayores desafíos que
                    enfrentamos en el siglo XXI. En DuckIO, creemos en el poder
                    de la tecnología para abordar estos desafíos. Desarrollamos
                    soluciones tecnológicas sostenibles que van desde la energía
                    renovable hasta la gestión eficiente de recursos. Nuestro
                    compromiso con la sostenibilidad se refleja en proyectos que
                    reducen el impacto ambiental y contribuyen a la construcción
                    de un futuro más limpio y ecológico. La tecnología
                    sostenible no solo es un imperativo ético, sino también una
                    fuente inagotable de innovación y progreso. Estamos
                    decididos a utilizar nuestra experiencia tecnológica para
                    crear un mundo más sostenible y próspero.
                </p>
            </div>
        </>
    );
}
