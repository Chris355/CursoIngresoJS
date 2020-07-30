/*Christian Silvero 
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */

function mostrar()
{
	var estacionIngresada;
	var destino;
	var porcentaje;
	var precioInicial;
	var precioFinal;

	precioInicial = 15000;
	estacionIngresada = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					porcentaje = 0.2;
				break;
				case "Mar del plata":
					porcentaje = -0.2;
				break;
				default:
					porcentaje = -0.1;
			}
		break;
		case "Verano":
			switch (destino)
			{				
				case "Bariloche":
					porcentaje = -0.2;
				break;
				case "Mar del plata":
					porcentaje = 0.2;
				break;
				default:
					porcentaje = 0.1;
			}
		break;
		default:
			switch (destino)
			{
				case "Cordoba":
					porcentaje = 0;
				break;
				default:
					porcentaje = 0.1;
			}
		break;
	}

	precioFinal = precioInicial + precioInicial * porcentaje;
	alert (precioFinal);

}