#!/bin/sh
# Execute all sub projects
echo "-----##START##----"
pwd
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export PATH="$PATH:$JAVA_HOME/bin"

export MAVEN_HOME=/usr/share/maven
export PATH="$PATH:$MAVEN_HOME/bin"



#FOODSYS=foodsys-service
#
WP=/cbserver/foodsys/foodsys-client

rm -rf /cbserver/foodsys/foodsys-client/*
#
## shellcheck disable=SC2164
#cd ./source/foodsys/foodsys-service
#pwd
#mvn -DskipTests=true clean package
#
## shellcheck disable=SC2115
#rm -rf $WP/*
#cp ./target/$FOODSYS-1.0.0-SNAPSHOT-spring-boot.jar $WP
#
## shellcheck disable=SC2164
#cd $WP
#pwd
#
#ps aux | grep spring-boot | grep $FOODSYS | awk '{print $2}' | xargs kill -9
#
#nohup java -jar -Dappenv=local $WP/$FOODSYS-1.0.0-SNAPSHOT-spring-boot.jar > $WP/nohup.log &
#pwd
