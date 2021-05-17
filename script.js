
  {
    this.d = this.calcularDTotais(dtIn, dtFi);
    this.v = this.d * invest;
    this.visu = 0;
    this.clik = 0;
    this.compart = 0;
    this.acumu = 0;
  }

  inicial() {
    let v = this.v*30; /* Número de visualizações */
    this.visu += v;
    this.visual(v);
  }

  visual(visu) {
    let clik = Math.floor((visua*12) / 100);
    this. clik += clik;
    this.clicar(clik);
  }

  clicar(clik) {
    let compart = Math.floor((clik *3) / 20); /* Número de clicks inicial*/
    this.compart += compart;
    this.compartilhar(compart);
  }

  compartilhar(compart) {
    let compartdViews = compart * 40; /* Número de compartilhamento*/
    this.visu += compartdViews;
    this.calcular(compartdViews);
  }

  calcular(newViews) {
    this.acum += 1;
    if (this. acum < 3) {   
      this.visual(newViews);
    }
  }

  calcularDTotais(dtIn, dtFi) {
    const dtIn = new Dt(dtIn);
    const dtFi = new Dt(dtFi);
    const dif = dtFi.getTime() - dtIn.getTime();
    const d = Math.ceil(dif / (1000*3600*24));
    return d;
  }




