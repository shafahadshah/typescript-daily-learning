// Private method

class Secret {
  private getSecret() {
    return "Hidden data";
  }

  reveal() {
    return this.getSecret();
  }
}

const s = new Secret();

console.log(s.reveal());

// s.getSecret(); ❌ Error