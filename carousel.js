// import React, { useState } from "react";
// import { Text,View,FlatList,Dimensions,ScrollView,StyleSheet} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Carousel (){
//     const {width,height} =Dimensions.get('screen');
//     const data=[1,2,3,4,];
//     const[index,setIndex] =useState(0);
//     const Fun=(event)=>{
//         const idx=(Math.round(event.nativeEvent.contentOffset.x/width));
//         // console.log(idx);
//         setIndex(idx)
//     }
//     return(
//         <SafeAreaView>
//                 <FlatList
//                 data={data}
//                 renderItem={({item})=>(

//                     <View style={{height:200,width:width,justifyContent:"center",alignItems:"center"}}>
//                         <View style={{width:"90%",height:"90%",justifyContent:"center",alignItems:"center",backgroundColor:"blue"}}>
//                     <Text style={{color:"white",fontSize:24}}>{item}</Text>
//                     </View>
//                     </View>
//                 )}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 pagingEnabled
//                 onScroll={(event)=>Fun(event)}
//                 />
//                 {/* <View style={styles.mainone} >
//                     {data.map((_,idx)=>(
//                         <View
//                         key={idx}
//                         style={[styles.dot,idx === index && styles.maindot]}
//                         />
//                     ))}
//                 </View> */}           
//         </SafeAreaView>
//     )
// }
// const styles = StyleSheet.create({
//     dot:{
//         width:10,
//         height:10,
//         borderRadius:5,
//         textAlign:"center",
//         backgroundColor:"gray",
//         marginHorizontal:5,
//     },
//     maindot:{
//         backgroundColor:"red",   
//     },
//     mainone:{
//         flexDirection:"row",
//         justifyContent:"center",
//         alignItems:"center",
//         marginVertical:10,
//     }
// }
    
// )


import react, { useState } from "react";
import { View,Text ,Dimensions,FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Carousel =()=>{
    const {width ,height}=Dimensions.get('screen');
    const Info = [1,2,3,4];
    const [index,setIndex] =useState(0);

    const Fun=(event)=>{
        const myindex=(Math.round(event.nativeEvent.contentOffset.x/width));
        setIndex(myindex);
    }
    return(
        <SafeAreaView>
            <FlatList 
            data={Info}
            renderItem={({item})=>(
                <View style={{height:200,width:width,justifyContent:"center",alignItems:"center",backgroundColor:"orange"}}>
                    <View style={{width:"90%",height:"90%",backgroundColor:"blue",justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:24,color:"white"}}>{item}</Text>

                    </View>

                </View>
            )}
            horizontal
            pagingEnabled
            onScroll={(event)=>Fun(event)}
            />
        </SafeAreaView>
    )
}

export default Carousel;