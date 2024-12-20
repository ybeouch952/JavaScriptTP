import matplotlib.pyplot as plt

heures = [1,2,3,4,5,6]
trafic = [120,200,150,300,250,500]

plt.plot(heures,trafic)
plt.title("Trafic réseau ")
plt.xlabel("Heures")
plt.ylabel("Nombre de paquets")
plt.grid(True)
plt.show()