<template>
  <div class="signup-container">
    <div class="signup-card">
      <div class="signup-header">
        <h1>Créer un compte</h1>
        <p>Rejoignez TaskForce pour optimiser votre gestion de tâches</p>
      </div>
      
      <!-- Message de succès -->
      <div v-if="successMessage" class="success-message">
        <h3>🎉 Inscription réussie !</h3>
        <p>{{ successMessage }}</p>
        <button class="btn-success" @click="goToHome">Retour à l'accueil</button>
      </div>
      
      <!-- Message d'erreur -->
      <div v-if="errorMessage" class="error-message">
        <h3>❌ Erreur</h3>
        <p>{{ errorMessage }}</p>
        <button class="btn-error" @click="clearError">Réessayer</button>
      </div>
      
      <!-- Formulaire d'inscription -->
      <form v-if="!successMessage" class="signup-form" @submit.prevent="handleSignup">
        <div class="form-group">
          <label for="firstName">Prénom</label>
          <input 
            type="text" 
            id="firstName" 
            v-model="form.firstName" 
            required
            placeholder="Votre prénom"
          >
        </div>
        
        <div class="form-group">
          <label for="lastName">Nom</label>
          <input 
            type="text" 
            id="lastName" 
            v-model="form.lastName" 
            required
            placeholder="Votre nom"
          >
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required
            placeholder="votre@email.com"
          >
        </div>
        
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input 
            type="password" 
            id="password" 
            v-model="form.password" 
            required
            placeholder="Votre mot de passe"
          >
        </div>
        
        <div class="form-group">
          <label for="confirmPassword">Confirmer le mot de passe</label>
          <input 
            type="password" 
            id="confirmPassword" 
            v-model="form.confirmPassword" 
            required
            placeholder="Confirmez votre mot de passe"
          >
        </div>
        
        <div class="form-group">
          <label for="role">Rôle</label>
          <select id="role" v-model="form.role" required>
            <option value="">Sélectionnez votre rôle</option>
            <option value="collaborator">Collaborateur</option>
            <option value="manager">Manager</option>
            <option value="project_manager">Responsable de projet</option>
          </select>
        </div>
        
        <button type="submit" class="btn-signup-submit" :disabled="isLoading">
          {{ isLoading ? 'Création en cours...' : 'Créer mon compte' }}
        </button>
      </form>
      
      <div v-if="!successMessage" class="signup-footer">
        <p>Déjà un compte ? <router-link to="/" class="link-login">Se connecter</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
      },
      isLoading: false,
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    async handleSignup() {
      if (this.form.password !== this.form.confirmPassword) {
        this.errorMessage = 'Les mots de passe ne correspondent pas'
        return
      }
      
      this.isLoading = true
      this.errorMessage = ''
      
      try {
        const response = await fetch('http://localhost:8000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            email: this.form.email,
            password: this.form.password,
            role: this.form.role
          })
        })
        
        const data = await response.json()
        
        if (response.ok) {
          this.successMessage = `Bienvenue ${this.form.firstName} ! Votre compte a été créé avec succès.`
        } else {
          this.errorMessage = data.error || 'Erreur lors de l\'inscription'
        }
      } catch (error) {
        this.errorMessage = 'Erreur de connexion au serveur'
        console.error('Erreur:', error)
      } finally {
        this.isLoading = false
      }
    },
    
    goToHome() {
      this.$router.push('/')
    },
    
    clearError() {
      this.errorMessage = ''
    }
  }
}
</script>

<style scoped>
.signup-container {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.signup-card {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
}

.signup-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.signup-header h1 {
  font-size: 2.5rem;
  color: #172b4d;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.signup-header p {
  color: #6b778c;
  font-size: 1.1rem;
}

.success-message, .error-message {
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.success-message {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.error-message {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.success-message h3, .error-message h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.btn-success, .btn-error {
  background: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
}

.btn-error {
  background: #dc3545;
}

.btn-success:hover {
  background: #218838;
}

.btn-error:hover {
  background: #c82333;
}

.signup-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #172b4d;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #0052cc;
  box-shadow: 0 0 0 3px rgba(0,82,204,0.1);
}

.form-group input::placeholder {
  color: #a0a0a0;
}

.btn-signup-submit {
  width: 100%;
  background: #0052cc;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

.btn-signup-submit:hover:not(:disabled) {
  background: #0047b3;
}

.btn-signup-submit:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.signup-footer {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #e1e5e9;
}

.signup-footer p {
  color: #6b778c;
  margin: 0;
}

.link-login {
  color: #0052cc;
  text-decoration: none;
  font-weight: 500;
}

.link-login:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .signup-card {
    padding: 2rem;
    margin: 1rem;
  }
  
  .signup-header h1 {
    font-size: 2rem;
  }
}
</style>
