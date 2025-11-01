package de.keepmealive3d.adapters.controllers

import de.keepmealive3d.adapters.data.StateData
import de.keepmealive3d.core.middleware.ResourceLoader
import dev.klenz.matthias.kscxml.KScxml
import dev.klenz.matthias.kscxml.components.state.KScxmlState
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

class StateMachineController(application: Application) {
    init {
        application.routing {
            authenticate("jwt") {
                get("/api/dt/{dt}/statemachine/{sm}") {
                    val calcText = ResourceLoader
                        .getResourceAsStream("calculator.xml")
                        .readAllBytes()
                        .decodeToString()
                    val scxml = KScxml.load(calcText)
                    val stateData = getStateData(
                        scxml.rootNode?.initial,
                        scxml.rootNode?.states ?: listOf(),
                        scxml.rootNode?.final,
                        1
                    )
                    call.respond(stateData)
                }
            }
        }
    }

    private fun getStateData(initial: String?, states: List<KScxmlState>, final: KScxmlState?, recursionDepth: Int): MutableList<StateData> {
        val stateData = mutableListOf<StateData>()

        if (states.isEmpty()) {
            return stateData
        }

        states.forEachIndexed { index, state ->
            val lStateData = StateData(
                state.id ?: "df",
                100 + index * 200,
                300 + recursionDepth * 10,
                state.transitions.mapNotNull { it.target }.toMutableList()
            )
            if (initial != null && state.id == initial) {
                stateData.addFirst(lStateData)
            } else {
                stateData.add(lStateData)
            }

            state.states.let { innerStates ->
                stateData.addAll(getStateData(state.initial, innerStates, state.final, recursionDepth + 2))
            }
        }

        return stateData
    }
}