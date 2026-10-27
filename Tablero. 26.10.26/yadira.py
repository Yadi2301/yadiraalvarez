# Importar la librería tkinter
import tkinter

# Crear el formulario principal (Tk)
frmPrincipal = tkinter.Tk()
frmPrincipal.geometry('300x400')
frmPrincipal.title('Aplicación de Prueba')

# ----------------- FILA 1: Nombre -----------------
lblNombre = tkinter.Label(frmPrincipal, text='Nombre :')
lblNombre.grid(row=1, column=1, padx=20, pady=10)

txtNombre = tkinter.Entry(frmPrincipal)
txtNombre.grid(row=1, column=2, padx=20, pady=10)

# ----------------- FILA 2: Edad -----------------
lblEdad = tkinter.Label(frmPrincipal, text='Edad :')
lblEdad.grid(row=2, column=1, padx=20, pady=10)

txtEdad = tkinter.Entry(frmPrincipal)
txtEdad.grid(row=2, column=2, padx=20, pady=10)

# ----------------- FILA 3: Estatura -----------------
lblEstatura = tkinter.Label(frmPrincipal, text='Estatura :')
lblEstatura.grid(row=3, column=1, padx=20, pady=10)

txtEstatura = tkinter.Entry(frmPrincipal)
txtEstatura.grid(row=3, column=2, padx=20, pady=10) 

# ----------------- FUNCIONES -----------------
def procesar():
    
    nombre = txtNombre.get()
    edad = txtEdad.get()
    estatura = txtEstatura.get()
    
    lbxSalida.delete(0, tkinter.END)
    
    
    lbxSalida.insert(tkinter.END, f"Hola {nombre} tu tienes {edad} años y ")
    lbxSalida.insert(tkinter.END, f"actualmente mides {estatura} de altura. ")


def borrar():
    txtNombre.delete(0, tkinter.END)
    txtEdad.delete(0, tkinter.END)
    txtEstatura.delete(0, tkinter.END)
    lbxSalida.delete(0, tkinter.END)


# ----------------- FILA 4: Botones -----------------
btnAceptar = tkinter.Button(frmPrincipal, text='Agregar', command=procesar)
btnAceptar.grid(row=4, column=1, padx=20, pady=20, ipadx=20)  

btnCancelar = tkinter.Button(frmPrincipal, text='Borrar', command=borrar)
btnCancelar.grid(row=4, column=2, padx=20, pady=20, ipadx=20)  

# ----------------- FILA 5: Lista de Salida -----------------
lbxSalida = tkinter.Listbox(frmPrincipal)
lbxSalida.grid(row=5, column=1, columnspan=2, ipadx=80, pady=10)  

# Ejecutar formulario
frmPrincipal.mainloop()