import { Theme } from '../types';

export const THEMES: Record<string, Theme> = {
  clash_royale: {
    id: 'clash_royale',
    title: 'Clash Royale',
    icon: 'Sword',
    description: 'Cartas, arenas y estrategias.',
    words: [
      {
        word: 'P.E.K.K.A',
        hints: [
          'Metal', 'Lento', 'Mariposa', 'Espada', 'Oscuro', 
          'Pesado', 'Robot', 'Cuernos', 'Épico', 'Arena', 
          'Daño', 'Caminar', 'Máscara', 'Sombra', 'Destrucción'
        ]
      },
      {
        word: 'Mega Caballero',
        hints: [
          'Salto', 'Bigote', 'Caída', 'Negro', 'Pesas', 
          'Aplastar', 'Siete', 'Área', 'Legendario', 'Armadura',
          'Puños', 'Tanque', 'Ruido', 'Cielo', 'Tierra'
        ]
      },
      {
        word: 'Montapuercos',
        hints: [
          'Cerdo', 'Salto', 'Martillo', 'Rápido', 'Cresta', 
          'Grito', 'Río', 'Estructura', 'Moreno', 'Cuatro',
          'Invocación', 'Bestia', 'Golpe', 'Ataque', 'Barba'
        ]
      },
      {
        word: 'Mago Eléctrico',
        hints: [
          'Rayo', 'Pelo', 'Zap', 'Aturdir', 'Dos', 
          'Arena', 'Soporte', 'Legendario', 'Azul', 'Manos', 
          'Descarga', 'Rápido', 'Mago', 'Control', 'Chispa'
        ]
      },
      {
        word: 'Barril de Duendes',
        hints: [
          'Verde', 'Volar', 'Tres', 'Cuchillo', 'Torre', 
          'Hechizo', 'Rápido', 'Distraer', 'Aéreo', 'Barril', 
          'Madera', 'Duende', 'Ataque', 'Ciclo', 'Barato'
        ]
      }
    ]
  },
  fortnite: {
    id: 'fortnite',
    title: 'Fortnite',
    icon: 'Crosshair',
    description: 'Battle Royale, construcción y bailes.',
    words: [
      {
        word: 'Pico',
        hints: [
          'Romper', 'Madera', 'Recolectar', 'Mano', 'Golpe', 
          'Material', 'Inicio', 'Herramienta', 'Metal', 'Recurso', 
          'Acero', 'Impacto', 'Construir', 'Sonido', 'Fijo'
        ]
      },
      {
        word: 'Autobús de Batalla',
        hints: [
          'Volar', 'Globo', 'Azul', 'Cielo', 'Caída', 
          'Transporte', 'Inicio', 'Música', 'Aire', 'Mapa',
          'Motor', 'Salto', 'Isla', 'Humo', 'Conductor'
        ]
      },
      {
        word: 'Torres Inclinadas (Tilted)',
        hints: [
          'Edificios', 'Caos', 'Ciudad', 'Pisos', 'Centro', 
          'Ladrillo', 'Peligro', 'Reloj', 'Vertical', 'Botín',
          'Muerte', 'Urbano', 'Inicio', 'Destrucción', 'Ventanas'
        ]
      },
      {
        word: 'Poción de Escudo',
        hints: [
          'Azul', 'Beber', 'Protección', 'Frasco', 'Vida', 
          'Salud', 'Llenar', 'Pequeño', 'Grande', 'Inventario', 
          'Sorbo', 'Plástico', 'Líquido', 'Defensa', 'Brillo'
        ]
      },
      {
        word: 'La Tormenta',
        hints: [
          'Morado', 'Círculo', 'Correr', 'Daño', 'Mapa', 
          'Tiempo', 'Cerrar', 'Borde', 'Ojo', 'Lluvia', 
          'Rayo', 'Nube', 'Muerte', 'Lento', 'Prisa'
        ]
      }
    ]
  },
  minecraft: {
    id: 'minecraft',
    title: 'Minecraft',
    icon: 'Box',
    description: 'Bloques, mobs y crafteo.',
    words: [
      {
        word: 'Creeper',
        hints: [
          'Verde', 'Boom', 'Siseo', 'Pólvora', 'Miedo', 
          'Cuatro', 'Silencio', 'TNT', 'Explotar', 'Cara',
          'Cueva', 'Noche', 'Mob', 'Caminar', 'Destruir'
        ]
      },
      {
        word: 'Diamante',
        hints: [
          'Azul', 'Pico', 'Cueva', 'Brillo', 'Mineral', 
          'Riqueza', 'Capa', 'Duro', 'Joya', 'Raro',
          'Armadura', 'Espada', 'Suelo', 'Piedra', 'Valioso'
        ]
      },
      {
        word: 'Enderman',
        hints: [
          'Alto', 'Negro', 'Ojos', 'Teleport', 'Bloque', 
          'Agua', 'Morado', 'Perla', 'Mirada', 'Largo',
          'Miedo', 'Noche', 'Robar', 'Sonido', 'Extremo'
        ]
      },
      {
        word: 'Portal al Nether',
        hints: [
          'Obsidiana', 'Fuego', 'Morado', 'Viaje', 'Infierno', 
          'Marco', 'Mechero', 'Sonido', 'Bloques', 'Oscuro', 
          'Espiral', 'Dimensión', 'Rectángulo', 'Magia', 'Roto'
        ]
      },
      {
        word: 'Aldeano',
        hints: [
          'Nariz', 'Sonido', 'Comercio', 'Esmeralda', 'Casa', 
          'Cama', 'Trabajo', 'Brazos', 'Cruzados', 'Pasivo', 
          'Mob', 'Huerto', 'Golem', 'Túnica', 'Robo'
        ]
      }
    ]
  },
  random: {
    id: 'random',
    title: 'Cosas Cotidianas',
    icon: 'Shuffle',
    description: 'Objetos y lugares del día a día.',
    words: [
      {
        word: 'Refrigerador',
        hints: [
          'Frío', 'Comida', 'Luz', 'Cocina', 'Puerta', 
          'Hielo', 'Conservar', 'Motor', 'Blanco', 'Guardar',
          'Noche', 'Cerrado', 'Grande', 'Hambre', 'Metal'
        ]
      },
      {
        word: 'Paraguas',
        hints: [
          'Lluvia', 'Agua', 'Abrir', 'Mojado', 'Tela', 
          'Mango', 'Tormenta', 'Techo', 'Seco', 'Viento',
          'Mano', 'Calle', 'Gotas', 'Negro', 'Protección'
        ]
      },
      {
        word: 'Cepillo de Dientes',
        hints: [
          'Dientes', 'Pasta', 'Baño', 'Boca', 'Cerdas', 
          'Limpieza', 'Mañana', 'Mango', 'Higiene', 'Sonrisa',
          'Agua', 'Frotar', 'Noche', 'Plástico', 'Personal'
        ]
      },
      {
        word: 'Microondas',
        hints: [
          'Calentar', 'Cocina', 'Rápido', 'Botones', 'Girar', 
          'Puerta', 'Luz', 'Pitido', 'Comida', 'Metal', 
          'Caja', 'Tiempo', 'Olas', 'Calor', 'Taza'
        ]
      },
      {
        word: 'Almohada',
        hints: [
          'Cama', 'Dormir', 'Suave', 'Cabeza', 'Plumas', 
          'Funda', 'Noche', 'Sueño', 'Descanso', 'Rectángulo', 
          'Blanca', 'Tela', 'Cómodo', 'Abrazar', 'Guerra'
        ]
      }
    ]
  },
  superheroes: {
    id: 'superheroes',
    title: 'Superhéroes',
    icon: 'Zap',
    description: 'Marvel y DC Cómics.',
    words: [
      {
        word: 'Batman',
        hints: [
          'Noche', 'Murciélago', 'Rico', 'Cueva', 'Negro', 
          'Coche', 'Mayordomo', 'Detective', 'Gotham', 'Capa',
          'Justicia', 'Sombra', 'Tecnología', 'Padres', 'Máscara'
        ]
      },
      {
        word: 'Spiderman',
        hints: [
          'Araña', 'Red', 'Rojo', 'Edificio', 'Sentido', 
          'Foto', 'Tío', 'Muro', 'Vecino', 'Nueva York',
          'Azul', 'Salto', 'Joven', 'Insecto', 'Picadura'
        ]
      },
      {
        word: 'Iron Man',
        hints: [
          'Traje', 'Metal', 'Vuelo', 'Rojo', 'Rico', 
          'Corazón', 'Energía', 'Genio', 'Láser', 'Robot',
          'Dorado', 'Vengador', 'Misil', 'Casco', 'Futuro'
        ]
      },
      {
        word: 'Superman',
        hints: [
          'Capa', 'Vuelo', 'Fuerte', 'S', 'Rojo', 
          'Azul', 'Alien', 'Sol', 'Gafas', 'Periodista', 
          'Acero', 'Kryptonita', 'Bueno', 'Rizo', 'Héroe'
        ]
      },
      {
        word: 'Hulk',
        hints: [
          'Verde', 'Enfado', 'Fuerte', 'Pantalones', 'Roto', 
          'Gigante', 'Científico', 'Gamma', 'Monstruo', 'Aplastar', 
          'Grito', 'Músculo', 'Transformar', 'Bestia', 'Puño'
        ]
      }
    ]
  },
  tech: {
    id: 'tech',
    title: 'Tecnología',
    icon: 'Cpu',
    description: 'Hardware, software y programación.',
    words: [
      {
        word: 'Teclado Mecánico',
        hints: [
          'Tecla', 'Click', 'Escribir', 'Dedos', 'Letra', 
          'Espacio', 'Switch', 'Ruido', 'Input', 'Botón',
          'Plástico', 'Mano', 'Ordenador', 'Luces', 'Gamer'
        ]
      },
      {
        word: 'Python',
        hints: [
          'Serpiente', 'Código', 'Datos', 'Indentar', 'Lenguaje', 
          'Script', 'Simple', 'Archivo', 'Texto', 'Backend',
          'Leer', 'Escribir', 'Programa', 'Lento', 'Popular'
        ]
      },
      {
        word: 'Wi-Fi',
        hints: [
          'Señal', 'Invisible', 'Internet', 'Onda', 'Router', 
          'Clave', 'Red', 'Conexión', 'Aire', 'Datos',
          'Lento', 'Rápido', 'Antena', 'Web', 'Gratis'
        ]
      },
      {
        word: 'Mouse',
        hints: [
          'Click', 'Mano', 'Puntero', 'Mesa', 'Rueda', 
          'Sensor', 'Deslizar', 'Luz', 'Cable', 'Óptico', 
          'Botones', 'Alfombrilla', 'Movimiento', 'Flecha', 'Input'
        ]
      },
      {
        word: 'Monitor',
        hints: [
          'Luz', 'Imagen', 'Rectángulo', 'Ojos', 'Pixeles', 
          'Escritorio', 'Ver', 'Cable', 'Negro', 'Marco', 
          'Resolución', 'Hz', 'Color', 'Brillo', 'Cristal'
        ]
      }
    ]
  },
  anime: {
    id: 'anime',
    title: 'Anime',
    icon: 'Tv',
    description: 'Series japonesas populares.',
    words: [
      {
        word: 'Goku',
        hints: [
          'Pelo', 'Bola', 'Pelea', 'Naranja', 'Comer', 
          'Nube', 'Fuerza', 'Grito', 'Saiyan', 'Tierra',
          'Dragón', 'Amigo', 'Entrenar', 'Rubio', 'Ki'
        ]
      },
      {
        word: 'Pikachu',
        hints: [
          'Amarillo', 'Rayo', 'Ratón', 'Rojo', 'Eléctrico', 
          'Mascota', 'Cola', 'Amigo', 'Trueno', 'Ash',
          'Pequeño', 'Lindo', 'Voltaje', 'Carga', 'Evolución'
        ]
      },
      {
        word: 'Luffy',
        hints: [
          'Goma', 'Sombrero', 'Pirata', 'Barco', 'Carne', 
          'Estirar', 'Mar', 'Capitán', 'Nakama', 'Tesoro',
          'Risa', 'Golpe', 'Paja', 'Sandalia', 'Rey'
        ]
      },
      {
        word: 'Naruto',
        hints: [
          'Ninja', 'Naranja', 'Zorro', 'Aldea', 'Banda', 
          'Ramen', 'Rubio', 'Clon', 'Chakra', 'Sello', 
          'Correr', 'Amigo', 'Hokage', 'Viento', 'Espiral'
        ]
      },
      {
        word: 'Sailor Moon',
        hints: [
          'Luna', 'Gato', 'Marinera', 'Tiara', 'Rubia', 
          'Transformar', 'Magia', 'Amor', 'Justicia', 'Lazo', 
          'Falda', 'Cetro', 'Planeta', 'Cristal', 'Conejo'
        ]
      }
    ]
  }
};