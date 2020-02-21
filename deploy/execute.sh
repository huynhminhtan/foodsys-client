#!/bin/sh

export PATH=/sbin:/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
pwd

WP=/cbserver/foodsys/foodsys-client

rm -rf $WP/*
cp -R ./* $WP/
cd $WP
pwd

#yarn install
#yarn start

#rm -rf /cbserver/foodsys/foodsys-client/*
#cp -R ./dist/* /cbserver/foodsys/foodsys-client/



