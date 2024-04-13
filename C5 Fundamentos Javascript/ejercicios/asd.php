<?php

# Función para imprimir el array
function imprimir($arrayDatos)
{
    echo "[ ";
    foreach ($arrayDatos as $indice => $valor) {
        echo $valor;
        if ($indice < count($arrayDatos) - 1) {
            echo ", ";
        }
    }
    echo " ]" . PHP_EOL;
}

# Función para rotar el array hacia la derecha
function rotarDerecha(&$arrayDatos)
{
    $tamaño = count($arrayDatos);
    $numeroDeRotaciones = 1; // Rotación pequeña: 2
    if ($numeroDeRotaciones == 0) {
        imprimir($arrayDatos);
        return;
    }
    echo "Array original: ";
    imprimir($arrayDatos);
    // Revertir todo el array
    reverseArray($arrayDatos, 0, $tamaño - 1);
    // Revertir los primeros $numeroDeRotaciones elementos
    reverseArray($arrayDatos, 0, $numeroDeRotaciones - 1);
    // Revertir los elementos restantes después de los primeros $numeroDeRotaciones elementos
    reverseArray($arrayDatos, $numeroDeRotaciones, $tamaño - 1);
    echo "Array rotado: ";
    imprimir($arrayDatos);
}

# Función para revertir un segmento del array
function reverseArray(&$array, $inicio, $fin)
{
    while ($inicio < $fin) {
        $temp = $array[$inicio];
        $array[$inicio] = $array[$fin];
        $array[$fin] = $temp;
        $inicio++;
        $fin--;
    }
}

# Ejemplo de uso con un array pequeño
$miArrayPequeño = [1, 2, 3, 4, 5,6,7,8];
rotarDerecha($miArrayPequeño);
