package de.keepmealive3d.adapters.data

import kotlinx.serialization.Serializable

@Serializable
data class StateData(
    val id: String,
    val posX: Int,
    val posY: Int,
    val connectedTo: MutableList<String>,
    val details: StateInfoDetails
)

@Serializable
data class StateInfoDetails(
    val initial: String?,
    val onEntry: Boolean = false,
    val onExit: Boolean = false,
    val transitions: List<StateTransitionDetails>,
)

@Serializable
data class StateTransitionDetails(
    val toState: String?,
    val event: String?,
    val condition: String?,
)