#!/bin/bash

# 🚀 Script de Deploy Automático - Gold Key Law
# Este script automatiza el despliegue a GitHub Pages

echo "🏛️  Gold Key Law - Deploy Script"
echo "================================"
echo ""

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar si Git está instalado
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git no está instalado.${NC}"
    echo "Instala Git desde: https://git-scm.com/downloads"
    exit 1
fi

echo -e "${GREEN}✅ Git está instalado${NC}"
echo ""

# Solicitar información del usuario
echo -e "${YELLOW}📝 Configuración inicial${NC}"
echo ""

read -p "Ingresa tu usuario de GitHub: " GITHUB_USER
read -p "Ingresa el nombre del repositorio (ej: goldkeylaw-website): " REPO_NAME
read -p "Ingresa tu email: " USER_EMAIL
read -p "Ingresa tu nombre: " USER_NAME

echo ""
echo -e "${YELLOW}🔧 Configurando Git...${NC}"

# Configurar Git
git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

echo -e "${GREEN}✅ Git configurado${NC}"
echo ""

# Inicializar repositorio
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}📦 Inicializando repositorio...${NC}"
    git init
    git branch -M main
    echo -e "${GREEN}✅ Repositorio inicializado${NC}"
else
    echo -e "${YELLOW}📦 Repositorio ya existe${NC}"
fi

echo ""

# Crear .gitignore si no existe
if [ ! -f ".gitignore" ]; then
    echo -e "${YELLOW}📄 Creando .gitignore...${NC}"
    cat > .gitignore << EOF
# System files
.DS_Store
Thumbs.db
*~

# Editor files
.vscode/
.idea/
*.swp
*.swo

# Temporary files
*.tmp
*.log

# Node modules (si usas Node.js en el futuro)
node_modules/

# Environment variables
.env
.env.local
EOF
    echo -e "${GREEN}✅ .gitignore creado${NC}"
fi

echo ""

# Agregar archivos
echo -e "${YELLOW}📤 Agregando archivos al repositorio...${NC}"
git add .

echo ""

# Commit
echo -e "${YELLOW}💾 Creando commit...${NC}"
COMMIT_MSG="Deploy inicial - Gold Key Law Website $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

echo -e "${GREEN}✅ Commit creado${NC}"
echo ""

# Agregar remote
REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
echo -e "${YELLOW}🔗 Conectando con GitHub...${NC}"
echo "URL: $REPO_URL"

git remote remove origin 2>/dev/null
git remote add origin $REPO_URL

echo -e "${GREEN}✅ Conectado con GitHub${NC}"
echo ""

# Push
echo -e "${YELLOW}🚀 Subiendo archivos a GitHub...${NC}"
echo ""
echo -e "${RED}⚠️  IMPORTANTE: Necesitarás autenticarte con GitHub${NC}"
echo -e "${YELLOW}Si no tienes token personal, créalo en:${NC}"
echo "https://github.com/settings/tokens"
echo ""

read -p "Presiona ENTER para continuar..."

git push -u origin main

echo ""

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ ¡Archivos subidos exitosamente!${NC}"
    echo ""
    echo -e "${YELLOW}📍 Próximos pasos:${NC}"
    echo ""
    echo "1. Ve a: https://github.com/$GITHUB_USER/$REPO_NAME/settings/pages"
    echo "2. En 'Source', selecciona: Branch 'main' → Folder '/ (root)'"
    echo "3. Click 'Save'"
    echo "4. Espera 1-2 minutos"
    echo ""
    echo -e "${GREEN}🌐 Tu sitio estará en:${NC}"
    echo "https://$GITHUB_USER.github.io/$REPO_NAME/"
    echo ""
    echo -e "${GREEN}🎉 ¡Deploy completado!${NC}"
else
    echo -e "${RED}❌ Error al subir archivos${NC}"
    echo ""
    echo "Soluciones comunes:"
    echo "1. Verifica que el repositorio exista en GitHub"
    echo "2. Verifica tus credenciales"
    echo "3. Usa un Personal Access Token en lugar de contraseña"
    echo ""
    exit 1
fi

echo ""
echo "================================"
echo "Gold Key Law - Deploy Script"
echo "================================"
