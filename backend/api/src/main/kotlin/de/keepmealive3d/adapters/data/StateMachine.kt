package de.keepmealive3d.adapters.data

import kotlinx.serialization.Serializable

@Serializable
data class StateData(
    val id: String,
    val posX: Long,
    val posY: Long,
    val connectedTo: MutableList<String>,
)