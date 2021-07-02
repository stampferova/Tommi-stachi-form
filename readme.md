Formulář pro Žádost o osobní půjčku
====================================

Zadání
------
Dle grafické předlohy vypracujte responsivní šablony pro Žádost o osobní půjčku s využitím šablonovacího systému Latte (Nette). S využitím jQuery implementujte interaktivní validaci, která umožní uživateli vidět aktuální stav při vyplňování formuláře.

Grafická předloha
-----------------
* [pro desktop](/graphics/pujcka_formular_desktop.png)
* [pro mobil](/graphics/pujcka_formular_mobil.png)

Akceptační kritéria
-------------------
* Formulář bude responzivní - optimalizovaný pro desktop i mobilní zařízení.
* Ve formuláři budou implementována následující FE validace:
    * Vybrané prvky budou mít vlastní validaci, která bude vyhodnocovat validační pravidla při jakékoliv obsahové změně (keyup).
    * Před odesláním formuláře se zvaliduje celý formulář, resp. zobrazí chybové hlášky pod každým prvkem, který neprošel validací.
* Pokud kterýkoliv prvek nesplňuje validační pravidla, zobrazí se pod ním chybová hláška.

Validační pravidla
------------------

Název | Chybová hláška | Validace | Možnosti výběru
----- | -------------- | -------- | ---------------
Váš čistý měsíční příjem: (Kč) | Čistý měsíční příjem musí být kladné, max. 10ti ciferné číslo s dvěma desetinnými místy. | - pouze kladné číslo<br>- max. 10 znaků<br>- max. 2 desetinná místa |
Zdroj Vašich příjmů | Musí být vybrán alespoň jeden zdroj příjmů. | |
Pravidelné splátky půjček: (Kč) | Pravidelné splátky musí být kladné, max. 10ti ciferné číslo s dvěma desetinnými místy. | - pouze kladné číslo<br>- max. 10 znaků<br>- max. 2 desetinná místa | |
Průměrné měsíční výdaje: (Kč) | Pravidelné splátky musí být kladné, max. 10ti ciferné číslo s dvěma desetinnými místy. | - pouze kladné číslo<br>- max. 10 znaků<br>- max. 2 desetinná místa | |
Druh bydlení: | Vyberte druh bydlení. | | - Vlastní<br>- Nájem<br>- Ostatní
Délka pobytu na současné adrese: | Vyberte délku pobytu na současné adrese | | - méně než rok<br>- více než rok<br>- více než 5 let
Dosažené vzdělání: | Vyberte dosažené vzdělání. | | - základní<br>- střední škola<br>- vysoká škola
Rodinný stav: | Vyberte rodinný stav. | | - svobodný<br>- ženatý<br>- rozvedený
Kolik dospělých členů domácnosti nemá vlastní příjem: | Vyberte počet dospělých členů domácnosti bez vlastního příjmu. | | 0 - 5 
Kolik dětí do 26 let bez vlastního příjmu žije ve společné domácnosti: | Vyberte počet dětí do 26 let bez vlastního příjmu ve společné domácnosti. | | 0 - 5
Číslo účtu | Prosím, vyplňte číslo účtu. | - použít validaci platného českého čísla účtu, nebo<br>- umožnit zadat pouze číslo a znak “-”<br>- max 17 znaků
Kód banky | Prosím, vyberte kód banky. | | - 0100 (Komerční banka)<br>- 0300 (ČSOB)<br>- 2010 (Fio banka)

Implementační poznámky
----------------------
* font-family: "Verdana", sans-serif
* použité barvy:
    * tmavě šedivá: #343A40
    * oranžová: #FE5000
    * světle šedivá: #75787B
    * červená: #FE0000


Postup při realizaci
--------------------

1. stáhněte si projekt prostřednictvím:

```
git clone git@gitlab.com:richard.domitrek/loan-form.git
```

2. Stáhněte si závislosti prostřednictvím (v rootu projektu):

```
composer install
```

3. Vytvořte adresáře `log` a `temp` a nastavte je pro zápis (v rootu projektu):
```
mkdir log temp
chmod 777 /log /temp
```

4. Spusťte si lokální server (v rootu projektu)
```
php -S localhost:8000 -t www
```

5. Otevřete stránku s budoucím formulářem na `http://localhost:8000`.

6. Dejte se do práce.
