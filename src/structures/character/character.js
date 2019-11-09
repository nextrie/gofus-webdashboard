import { charStates } from "./charState"

export default class Character {
    constructor(name, charClass, currentHealth, maxHealth, currentPods, maxPods, currentLevel, currentXP, currentMaxXP)
    {
        this.name = name;
        this.currentHealth = currentHealth;
        this.maxHealth = maxHealth;
        this.currentPods = currentPods;
        this.maxPods = maxPods;
        this.currentLevel = currentLevel;
        this.currentXP = currentXP;
        this.currentMaxXP = currentMaxXP;
        this.state = charStates.DISCONNECTED;
        this.charClass = charClass;
    }

    updateXP(currentLevel, currentXP, currentMaxXP) {
        this.currentLevel = currentLevel;
        this.currentXP = currentXP;
        this.currentMaxXP = currentMaxXP;
    }

    updateHealth(currentHealth, maxHealth) {
        this.currentHealth = currentHealth;
        this.maxHealth = maxHealth;
    }

    updatePods(currentPods, maxPods) {
        this.currentPods = currentPods;
        this.maxPods = maxPods;
    }

    getClassImg() {
        if (this.charClass != null)
            return ("https://www.breakflip.com/uploads/Dofus/Icones/"+ this.charClass +".png");
        else
            return null;
    }
}