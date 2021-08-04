node('jenkins-agent-php-1') {
 status = "0"

 try{

   stage('Cleaning Workspace') {
       echo 'Initializing for clean build...'
       deleteDir()
   }
 
   try{   
        stage('Checkout SCM') {
            echo 'Checkout SCM...'
            checkout scm
        }
    }
   finally{
    stage('SonarQube analysis') {
        def node = tool name: 'NodeJS-8.9', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        env.PATH = "${node}/bin:${env.PATH}"

        def scannerHome = tool 'SonarScanner' ;
        withSonarQubeEnv('SonarQube') {
          sh "${scannerHome}/bin/sonar-scanner"
        }
    }
   }
 }catch(e){

   throw e;
 }
 
  if(status == "1"){
      echo "hasil: ${status}"
      echo "Test Berhasil"
  }else{
      echo "Test Gagal"
  }
 
}