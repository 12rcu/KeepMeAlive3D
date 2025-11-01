package de.keepmealive3d.adapters.data

import kotlinx.serialization.Serializable

@Serializable
data class StateData(
    val id: String,
    val posX: Int,
    val posY: Int,
    val connectedTo: MutableList<String>,
)