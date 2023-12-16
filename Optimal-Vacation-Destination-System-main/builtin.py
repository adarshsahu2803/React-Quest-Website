import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import pydot
from sklearn.tree import export_graphviz
import graphviz


dat = pd.read_csv("Places.csv")
X = dat.loc[:, ['Cost','Duration','Family']]
y = dat['Target']


tree1 = DecisionTreeClassifier(criterion='entropy',
                       max_depth=4, random_state=0)
tree2 = DecisionTreeClassifier(criterion='gini',
                       max_depth=4, random_state=0)

tree1.fit(X, y)
tree2.fit(X, y)

from sklearn.tree import export_graphviz
export_graphviz(tree1,
      out_file='tree1.dot',
      feature_names=['Cost','Duration','Family'])
export_graphviz(tree2,
      out_file='tree2.dot',
      feature_names=['Cost','Duration','Family'])

(graph1,) = pydot.graph_from_dot_file('tree1.dot')
(graph2,) = pydot.graph_from_dot_file('tree2.dot')

graph1.write_png('tree1.png')
graph2.write_png('tree2.png')
