#! /usr/bin/awk -f
{
  file=$0
  file=toupper(file)
  gsub (/[^A-Z0-9]/, "",file)
  split("1,2,3,4,5,6,7,8,9,0",nos,",")
  split("ONE,TWO,THREE,FOUR,FIVE,SIX,SEVEN,EIGHT,NINE,ZERO",nos_in_words,",")
    
  for(i=1;i<=10;i++)
  {
     gsub(nos[i],nos_in_words[i],file)
  }

  for(j=1;j<27;j++)
  {
    split("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",letters,",")
    split("s,e,j,n,u,d,v,t,m,b,l,r,y,a,x,z,i,c,p,q,h,w,k,f,o,g",random_letters,",")
    gsub(letters[j],random_letters[j],file) 
  }
  file=toupper(file)
  print file
}
