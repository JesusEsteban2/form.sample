Repasar y hacer ejercicios de:

. Position, Transform y translate en CSS
Solo se puede usar translate con elementos de tipo box, no funciona con los in-line.
. Display flex

Propiedades del contenedor.

    display: flex;
    flex-direction: row; // Disposición de los elementos dentro del contenedor.
    flex-wrap: wrap; // Si los elementos no caben en una linea pasan a la siguiente.
    justify-content: center; // Alineación de los elementos en el eje principal.
    align-items: center; // Alineación de los elementos en el eje secundario.
    align-content: center; // Alineación de los elementos en varias líneas.
    gap: 10px 20px; // row-gap column gap, espaciado entre elementos.

Propiedades de los elementos dentro del contenedor.

    order: 2; // Orden de presentación dentro del contenedor.
    flex-grow: 4; //Permite a los elementos crecer en proporción a la cifra indicada.
    flex-shrink: 2; // Permite a los elementos, menguar en proporción al nº indicado.
    flex-basis: auto; // Indica el tamaño de los elementos antes de distribuir el espacio sobrante.
    Se puede indicar tamaño o auto.
    flex: 4 2; // Permite fijar flex-grow y flex-shrink en un solo comando.
    align-self:flex-end; // Permite alterar la alineación del eje secundario para el elemento
    ignorando align-items del contenedor.

. Display Grid

. Formularios y botones HTML y JS
Los input deben tener obligatoriamente el atributo name para poder usar formData.
Ver en form.js como recoger los datos de un formulario.
. Fetch
